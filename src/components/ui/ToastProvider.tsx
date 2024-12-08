export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <div className="fixed top-5 right-5 z-50">{children}</div>;
}
