import { useState } from 'react';
import { horses, Horse } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Pencil, Eye, EyeOff, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HorseManager() {
  const [searchQuery, setSearchQuery] = useState('');
  const [horseList, setHorseList] = useState(horses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingHorse, setEditingHorse] = useState<Horse | null>(null);

  const filteredHorses = horseList.filter(
    (horse) =>
      horse.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      horse.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleVisibility = (id: string) => {
    setHorseList((prev) =>
      prev.map((h) =>
        h.id === id
          ? { ...h, visibility: h.visibility === 'public' ? 'hidden' : 'public' }
          : h
      )
    );
  };

  const handleEdit = (horse: Horse) => {
    setEditingHorse(horse);
    setIsDialogOpen(true);
  };

  const handleAddNew = () => {
    setEditingHorse(null);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground">Horse Manager</h2>
          <p className="text-muted-foreground">Manage your horse collection</p>
        </div>
        <Button onClick={handleAddNew} className="btn-gold">
          <Plus className="h-4 w-4 mr-2" />
          Add Horse
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search horses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-background overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[80px]">Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Breed</TableHead>
              <TableHead className="hidden sm:table-cell">Age</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHorses.map((horse) => (
              <TableRow key={horse.id} className="hover:bg-muted/30">
                <TableCell>
                  <img
                    src={horse.images[0]}
                    alt={horse.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{horse.name}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {horse.breed}
                </TableCell>
                <TableCell className="hidden sm:table-cell text-muted-foreground">
                  {horse.age} yrs
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium capitalize',
                      horse.status === 'available' && 'bg-green-100 text-green-700',
                      horse.status === 'sold' && 'bg-gray-100 text-gray-700',
                      horse.status === 'not-for-sale' && 'bg-blue-100 text-blue-700'
                    )}
                  >
                    {horse.status.replace('-', ' ')}
                  </span>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => toggleVisibility(horse.id)}
                    className={cn(
                      'p-2 rounded-lg transition-colors',
                      horse.visibility === 'public'
                        ? 'text-secondary hover:bg-secondary/10'
                        : 'text-muted-foreground hover:bg-muted'
                    )}
                  >
                    {horse.visibility === 'public' ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(horse)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              {editingHorse ? `Edit ${editingHorse.name}` : 'Add New Horse'}
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue={editingHorse?.name}
                  placeholder="Horse name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="breed">Breed</Label>
                <Input
                  id="breed"
                  defaultValue={editingHorse?.breed}
                  placeholder="e.g., Arabian"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  defaultValue={editingHorse?.age}
                  placeholder="Years"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue={editingHorse?.height}
                  placeholder="15.2 hands"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input
                  id="color"
                  defaultValue={editingHorse?.color}
                  placeholder="Bay"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue={editingHorse?.gender || 'Stallion'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Stallion">Stallion</SelectItem>
                    <SelectItem value="Mare">Mare</SelectItem>
                    <SelectItem value="Gelding">Gelding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Sales Status</Label>
                <Select defaultValue={editingHorse?.status || 'available'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="not-for-sale">Not For Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price (if applicable)</Label>
              <Input
                id="price"
                type="number"
                defaultValue={editingHorse?.price}
                placeholder="85000"
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <div>
                <p className="font-medium text-foreground">Public Visibility</p>
                <p className="text-xs text-muted-foreground">Show on public collection page</p>
              </div>
              <Switch defaultChecked={editingHorse?.visibility === 'public'} />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="btn-gold">
                {editingHorse ? 'Save Changes' : 'Add Horse'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
