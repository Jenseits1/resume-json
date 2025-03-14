import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { FunctionComponent } from "react";

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					{/* Documentation Link */}
					<NavigationMenuItem>
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink>
								Documentation
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					{/* Import Resume JSON */}
					<NavigationMenuItem>
						<NavigationMenuLink>
							Import Resume JSON
						</NavigationMenuLink>
					</NavigationMenuItem>

					{/* Export Resume JSON */}
					<NavigationMenuItem>
						<NavigationMenuLink>
							Export Resume JSON
						</NavigationMenuLink>
					</NavigationMenuItem>

					{/* Select Current Resume */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							Select Current Resume
						</NavigationMenuTrigger>
						<NavigationMenuContent></NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
};
