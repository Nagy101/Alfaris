import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface BookingSelection {
  serviceType: 'lessons' | 'trips' | 'hospitality' | null;
  date: Date | null;
  timeSlot: string | null;
  instructor?: string;
}

interface CartStore {
  items: CartItem[];
  isCartOpen: boolean;
  booking: BookingSelection;
  
  // Cart actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Booking actions
  setBookingService: (serviceType: BookingSelection['serviceType']) => void;
  setBookingDate: (date: Date | null) => void;
  setBookingTimeSlot: (timeSlot: string | null) => void;
  setBookingInstructor: (instructor: string) => void;
  clearBooking: () => void;
  
  // Computed
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      booking: {
        serviceType: null,
        date: null,
        timeSlot: null,
        instructor: undefined,
      },

      // Cart actions
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: quantity <= 0
            ? state.items.filter((item) => item.id !== id)
            : state.items.map((item) =>
                item.id === id ? { ...item, quantity } : item
              ),
        }));
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      // Booking actions
      setBookingService: (serviceType) => {
        set((state) => ({
          booking: { ...state.booking, serviceType },
        }));
      },

      setBookingDate: (date) => {
        set((state) => ({
          booking: { ...state.booking, date, timeSlot: null },
        }));
      },

      setBookingTimeSlot: (timeSlot) => {
        set((state) => ({
          booking: { ...state.booking, timeSlot },
        }));
      },

      setBookingInstructor: (instructor) => {
        set((state) => ({
          booking: { ...state.booking, instructor },
        }));
      },

      clearBooking: () => {
        set({
          booking: {
            serviceType: null,
            date: null,
            timeSlot: null,
            instructor: undefined,
          },
        });
      },

      // Computed
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'al-faris-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
