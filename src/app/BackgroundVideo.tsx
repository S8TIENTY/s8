const backgroundEmbedUrl =
  'https://player.vimeo.com/video/1116386427?background=1&autoplay=1&muted=1&loop=1&autopause=0&title=0&byline=0&portrait=0&dnt=1';

export function BackgroundVideo() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#06111f]">
      <iframe
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        className="absolute left-1/2 top-1/2 border-0"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        src={backgroundEmbedUrl}
        style={{
          width: '177.77777778vh',
          height: '56.25vw',
          minWidth: '100%',
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
        }}
        tabIndex={-1}
        title="S8 background video"
      />
    </div>
  );
}
