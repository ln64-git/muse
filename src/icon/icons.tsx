type IconProps = {
  size?: number;
  className?: string;
};

export function VolumeHighIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32" // Ensure the viewBox is correctly set
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M0 0 C0 5.28 0 10.56 0 16 C-1.65 15.01 -3.3 14.02 -5 13 C-8.19395026 12.28598768 -8.19395026 12.28598768 -11 12 C-11 9.36 -11 6.72 -11 4 C-9.906875 3.71125 -8.81375 3.4225 -7.6875 3.125 C-5.48441433 2.45287217 -2.08910496 0 0 0 Z"
        fill="currentColor"
        transform="translate(11,7)"
      />
      <path
        d="M0 0 C3 1 3 1 4.6875 3.25 C6.75461003 9.15602867 7.45086198 16.20596185 5.16796875 22.17578125 C4.125 23.8125 4.125 23.8125 2 26 C1.34 26 0.68 26 0 26 C0.875 21.25 0.875 21.25 2 19 C2.58192025 12.25196323 2.19670909 6.99382954 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z"
        fill="currentColor"
        transform="translate(24,2)"
      />
      <path
        d="M0 0 C1.9375 0.8125 1.9375 0.8125 4 2 C5.01702117 5.0510635 5.16582083 7.24199061 5.1875 10.4375 C5.20167969 11.38496094 5.21585938 12.33242188 5.23046875 13.30859375 C4.99614518 16.04501644 4.39701383 17.66428123 3 20 C2.01 20 1.02 20 0 20 C0.165 19.360625 0.33 18.72125 0.5 18.0625 C1.49267155 11.98238675 1.23765436 6.03356501 0 0 Z"
        fill="currentColor"
        transform="translate(19,5)"
      />
      <path
        d="M0 0 C3 1 3 1 4 3 C4.06950541 4.54023996 4.08452357 6.08334988 4.0625 7.625 C4.05347656 8.44226562 4.04445313 9.25953125 4.03515625 10.1015625 C4.02355469 10.72804688 4.01195312 11.35453125 4 12 C2.02 12.99 2.02 12.99 0 14 C0 9.33333333 0 4.66666667 0 0 Z"
        fill="currentColor"
        transform="translate(14,8)"
      />
    </svg>
  );
}

export function VolumeMediumIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Ensure the viewBox is correctly set
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M0 0 C0 5.28 0 10.56 0 16 C-1.65 15.01 -3.3 14.02 -5 13 C-8.19395026 12.28598768 -8.19395026 12.28598768 -11 12 C-11 9.36 -11 6.72 -11 4 C-9.906875 3.71125 -8.81375 3.4225 -7.6875 3.125 C-5.48441433 2.45287217 -2.08910496 0 0 0 Z "
        fill="currentColor"
        transform="translate(11,7)"
      />
      <path
        d="M0 0 C1.9375 0.8125 1.9375 0.8125 4 2 C5.01702117 5.0510635 5.16582083 7.24199061 5.1875 10.4375 C5.20167969 11.38496094 5.21585938 12.33242188 5.23046875 13.30859375 C4.99614518 16.04501644 4.39701383 17.66428123 3 20 C2.01 20 1.02 20 0 20 C0.165 19.360625 0.33 18.72125 0.5 18.0625 C1.49267155 11.98238675 1.23765436 6.03356501 0 0 Z "
        fill="currentColor"
        transform="translate(19,5)"
      />
      <path
        d="M0 0 C3 1 3 1 4 3 C4.06950541 4.54023996 4.08452357 6.08334988 4.0625 7.625 C4.05347656 8.44226562 4.04445313 9.25953125 4.03515625 10.1015625 C4.02355469 10.72804688 4.01195312 11.35453125 4 12 C2.02 12.99 2.02 12.99 0 14 C0 9.33333333 0 4.66666667 0 0 Z "
        fill="currentColor"
        transform="translate(14,8)"
      />
    </svg>
  );
}

export function VolumeLowIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Ensure the viewBox is correctly set
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M0 0 C0 5.28 0 10.56 0 16 C-1.65 15.01 -3.3 14.02 -5 13 C-8.19395026 12.28598768 -8.19395026 12.28598768 -11 12 C-11 9.36 -11 6.72 -11 4 C-9.906875 3.71125 -8.81375 3.4225 -7.6875 3.125 C-5.48441433 2.45287217 -2.08910496 0 0 0 Z "
        fill="currentColor"
        transform="translate(11,7)"
      />
      <path
        d="M0 0 C3 1 3 1 4 3 C4.06950541 4.54023996 4.08452357 6.08334988 4.0625 7.625 C4.05347656 8.44226562 4.04445313 9.25953125 4.03515625 10.1015625 C4.02355469 10.72804688 4.01195312 11.35453125 4 12 C2.02 12.99 2.02 12.99 0 14 C0 9.33333333 0 4.66666667 0 0 Z "
        fill="currentColor"
        transform="translate(14,8)"
      />
    </svg>
  );
}

export function VolumeMuteIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Ensure the viewBox is correctly set
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M0 0 C0 5.28 0 10.56 0 16 C-1.65 15.01 -3.3 14.02 -5 13 C-8.19395026 12.28598768 -8.19395026 12.28598768 -11 12 C-11 9.36 -11 6.72 -11 4 C-9.906875 3.71125 -8.81375 3.4225 -7.6875 3.125 C-5.48441433 2.45287217 -2.08910496 0 0 0 Z "
        fill="currentColor"
        transform="translate(11,7)"
      />
      <path
        d="M0 0 C0.9075 0.185625 1.815 0.37125 2.75 0.5625 C5.68314324 0.95734621 7.2644657 0.94691572 10 0 C9.814375 0.9075 9.62875 1.815 9.4375 2.75 C9.04265379 5.68314324 9.05308428 7.2644657 10 10 C9.0925 9.814375 8.185 9.62875 7.25 9.4375 C4.31685676 9.04265379 2.7355343 9.05308428 0 10 C0.185625 9.0925 0.37125 8.185 0.5625 7.25 C0.95734621 4.31685676 0.94691572 2.7355343 0 0 Z "
        fill="currentColor"
        transform="translate(16,10)"
      />
    </svg>
  );
}

export function SearchIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24" // Ensure the viewBox is correctly set
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2a9 9 0 1 0 6.32 15.32l4.39 4.39a1 1 0 0 0 1.41-1.41l-4.39-4.39A9 9 0 0 0 11 2zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PlusIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M12 2C12.5523 2 13 2.44772 13 3V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H11V3C11 2.44772 11.44772 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ListViewIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M0 0 C5.28 0 10.56 0 16 0 C16 0.66 16 1.32 16 2 C10.72 2 5.44 2 0 2 C0 1.34 0 0.68 0 0 Z "
        fill="currentColor"
        transform="translate(11,22)"
      />
      <path
        d="M0 0 C5.28 0 10.56 0 16 0 C16 0.66 16 1.32 16 2 C10.72 2 5.44 2 0 2 C0 1.34 0 0.68 0 0 Z "
        fill="currentColor"
        transform="translate(11,14)"
      />
      <path
        d="M0 0 C5.28 0 10.56 0 16 0 C16 0.66 16 1.32 16 2 C10.72 2 5.44 2 0 2 C0 1.34 0 0.68 0 0 Z "
        fill="currentColor"
        transform="translate(11,6)"
      />
      <path
        d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z "
        fill="currentColor"
        transform="translate(3,21)"
      />
      <path
        d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z "
        fill="currentColor"
        transform="translate(3,13)"
      />
      <path
        d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z "
        fill="currentColor"
        transform="translate(3,5)"
      />
    </svg>
  );
}
