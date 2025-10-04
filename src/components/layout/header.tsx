import Link from 'next/link';
import { Swords, Info, FileText, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          aria-label="Homepage"
        >
          <Swords className="h-6 w-6 text-accent" />
          <span className="font-bold sm:inline-block">OpenBoard</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 ml-auto">
          <Button variant="ghost" asChild>
            <Link href="/contribute">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline-block ml-2">Contribute</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/generate-readme">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline-block ml-2">Readme Gen</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Profile">
            <UserCircle className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
