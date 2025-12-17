import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="swiss-card h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
