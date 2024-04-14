function Counter({ handleSetCount }) {
    return (
        <div>
            <button onClick={() => handleSetCount(+1)}>+</button>
            <button onClick={() => handleSetCount(-1)}>-</button>
        </div>
    )
}

export default Counter
