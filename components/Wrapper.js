function Wrapper(props) {
    return (
        <div className="min-h-screen bg-gradient-to-t from-blue-900 via-blue-800 to-gray-900 font-fontpopins" >
            {props.children}
        </div>
    )
}

export default Wrapper
