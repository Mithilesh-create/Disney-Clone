function Layout(props) {
    return (
        <div className={`px-10 min-h-screen h-auto w-full py-2 ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Layout;
