import {ModeToggle} from "@/components/mode-toggle";

const SiteHeader = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <div className="text-xl font-bold">Brush Docs</div>
                <ModeToggle />
            </div>
        </header>
    );
};

export default SiteHeader;
