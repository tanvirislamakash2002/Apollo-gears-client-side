import Navbar from "./_component/shared/navbar/Navbar";


export default function CommonLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="min-h-full flex flex-col">
            <Navbar />
            {children}
            <div>Footer</div>
        </div>

    );
}
