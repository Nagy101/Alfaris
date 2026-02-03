import { cn } from '@/lib/utils';

interface PedigreeNode {
  name: string;
  sire?: string;
  dam?: string;
}

interface PedigreeTreeProps {
  pedigree: {
    sire: PedigreeNode;
    dam: PedigreeNode;
  };
  horseName: string;
}

export default function PedigreeTree({ pedigree, horseName }: PedigreeTreeProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[700px] flex items-center justify-center">
        {/* 3 Generations Tree */}
        <div className="flex items-center gap-4">
          {/* Generation 1 (Current Horse) */}
          <div className="flex flex-col items-center">
            <PedigreeCard name={horseName} isRoot />
          </div>

          <div className="w-8 h-px bg-border" />

          {/* Generation 2 (Parents) */}
          <div className="flex flex-col gap-16">
            {/* Sire Branch */}
            <div className="flex items-center gap-4">
              <PedigreeCard name={pedigree.sire.name} label="Sire" />
              <div className="w-8 h-px bg-border" />
              <div className="flex flex-col gap-4">
                <PedigreeCard name={pedigree.sire.sire || 'Unknown'} label="Grandsire" size="sm" />
                <PedigreeCard name={pedigree.sire.dam || 'Unknown'} label="Granddam" size="sm" />
              </div>
            </div>

            {/* Dam Branch */}
            <div className="flex items-center gap-4">
              <PedigreeCard name={pedigree.dam.name} label="Dam" />
              <div className="w-8 h-px bg-border" />
              <div className="flex flex-col gap-4">
                <PedigreeCard name={pedigree.dam.sire || 'Unknown'} label="Grandsire" size="sm" />
                <PedigreeCard name={pedigree.dam.dam || 'Unknown'} label="Granddam" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PedigreeCardProps {
  name: string;
  label?: string;
  isRoot?: boolean;
  size?: 'default' | 'sm';
}

function PedigreeCard({ name, label, isRoot, size = 'default' }: PedigreeCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border transition-colors',
        isRoot
          ? 'bg-primary text-primary-foreground border-primary p-6'
          : 'bg-card text-card-foreground border-border hover:border-secondary',
        size === 'sm' ? 'p-3' : 'p-4'
      )}
    >
      {label && (
        <p className={cn(
          'uppercase tracking-wider font-medium mb-1',
          isRoot ? 'text-primary-foreground/70' : 'text-muted-foreground',
          size === 'sm' ? 'text-[10px]' : 'text-xs'
        )}>
          {label}
        </p>
      )}
      <p className={cn(
        'font-serif font-semibold',
        size === 'sm' ? 'text-sm' : 'text-base'
      )}>
        {name}
      </p>
    </div>
  );
}
