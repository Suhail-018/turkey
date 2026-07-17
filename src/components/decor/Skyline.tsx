/** Istanbul skyline silhouette — domes and minarets, used above the footer. */
export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M0 120V96h40V80h8V60l4-12 4 12v20h8v16h56V88h6V60h4V40l3-8 3 8v20h4v28h6v8h50V84c0-26 22-46 48-46s48 20 48 46v12h30V70h5V38l4-10 4 10v32h5v26h60v-8h8V56l4-14 4 14v32h8v8h60V80c0-20 17-36 38-36s38 16 38 36v16h26V56h6V30l4-10 4 10v26h6v40h70V84c0-30 26-54 58-54s58 24 58 54v12h34V64h6V34l4-12 4 12v30h6v32h56v-8h8V50l5-16 5 16v40h8v8h48V80c0-18 15-32 34-32s34 14 34 32v16h30V70h5V40l4-10 4 10v30h5v26h62V84c0-24 20-42 44-42s44 18 44 42v12h30V60h4V38l3-8 3 8v22h4v36h48V80h8V58l4-14 4 14v22h8v16h40v24z" />
    </svg>
  );
}
