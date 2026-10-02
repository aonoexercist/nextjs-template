interface AuthCardProps {
  title: string;
  description: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}
 
export function AuthCard({ title, description, footer, children }: AuthCardProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
 
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8">
        {children}
      </div>
 
      {footer && <div className="text-center text-xs text-muted-foreground">{footer}</div>}
    </div>
  );
}
 
