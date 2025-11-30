type Entry = {
  index: number
  title: string
  subtitle?: string
}

type Props = {
  entries?: Entry[]
  setCurrentSlide?: (n: number) => void
  currentSlide?: number
}

export default function TableOfContentsSlide({
  entries = [],
  setCurrentSlide
}: Props) {
  return (
    <div className="slide toc-slide">
      <h1>📑 Mục Lục</h1>
      <p className="subtitle">
        Tìm nhanh các phần trình bày và nhảy tới mục mong muốn
      </p>

      <div className="toc-list">
        {entries.map(entry => (
          <button
            key={entry.index}
            onClick={() => setCurrentSlide?.(entry.index)}
            className={`toc-item`}
          >
            <span className="toc-number">{entry.index + 1}</span>
            <span className="toc-title">{entry.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
