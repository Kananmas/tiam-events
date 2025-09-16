export function SearchIcon({ width = '69', height = '69' }: { width?: number|string, height?: number|string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill="white">
        <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="4" color="white" fill="white" />
        <line x1="21" y1="21" x2="23" y2="23" stroke="white" strokeWidth="3" color="white" strokeLinecap="round" />
    </svg>
}