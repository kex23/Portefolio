import * as React from "react"
import { SVGProps } from "react"
const DownloadIcons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-arrow-down-to-line"
    {...props}
  >
    <path d="M12 17V3M6 11l6 6 6-6M19 21H5" />
  </svg>
)
export default DownloadIcons
