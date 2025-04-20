function NavBar () {
    return (
        <div className=" p-3 flex justify-between">
            <div>
                <p>Home</p>
            </div>
            <div>
                <ul className="flex">
                    <li className="me-2">Products</li>
                    <li className="me-2">Products by ID</li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;