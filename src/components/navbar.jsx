export default function Navbar() {
    return <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyTodos</div>
        <div className="space-x-4">
          <button className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</button>
          <button className="text-white hover:bg-blue-700 px-3 py-2 rounded">About Us</button>
          <button className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact Us</button>
        </div>
      </div>
    </nav>
    </>
}



