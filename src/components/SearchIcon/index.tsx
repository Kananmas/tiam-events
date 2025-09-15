export function SearchIcon({ width = 12, height = 12 }: { width?: number, height?: number }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill="white">
        <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" color="white" fill="white" />
        <line x1="16" y1="16" x2="19" y2="19" stroke="white" strokeWidth="1" color="white" strokeLinecap="round" />
    </svg>
}