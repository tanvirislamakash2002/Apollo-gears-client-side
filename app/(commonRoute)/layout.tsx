

export default function CommonLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="min-h-full flex flex-col">
            <div>Header</div>
            {children}
            <div>Footer</div>
            </div>

    );
}
