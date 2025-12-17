interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <div className="image-card group">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h4 className="text-primary-foreground font-semibold text-lg">{title}</h4>
        {description && (
          <p className="text-primary-foreground/80 text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
