export default function AprendeKidsLogo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const heightClass = isLarge ? 'h-14 sm:h-16' : isSmall ? 'h-8 sm:h-9' : 'h-10 sm:h-12';

  return (
    <div className="inline-flex flex-col items-center select-none" id="aprende-kids-logo">
      <img
        src="/assets/pdf_extracted/logo.png"
        alt="Aprende Kids"
        className={`${heightClass} w-auto object-contain drop-shadow-md`}
        onError={(e) => {
          // If image fails, fallback to rendering text
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
