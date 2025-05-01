export default function Page404NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-regular-darkgray-cl">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-regular-white-cl">404</h1>
        <p className="mt-4 text-lg text-regular-gray-txtcl">Page Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-regular-blue-cl px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}
