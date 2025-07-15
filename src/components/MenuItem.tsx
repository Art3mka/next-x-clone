import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  const pathname = usePathname();
  return (
    <Link
      className={isActive ? "text-white" : "text-white/80"}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}
