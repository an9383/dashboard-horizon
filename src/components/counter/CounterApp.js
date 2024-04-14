import { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
import Viewer from './View'

function CounterApp() {
    const [count, setCount] = useState(0)
    const handleSetCount = (value) => {
        setCount(count + value)
    }

    const didMount = useRef(false)

    useEffect(() => {
        if (!didMount.current) {
            // didMountRef.current를 true로 설정 후 함수를 종료
            didMount.current = true
            return
        } else {
            console.log('업데이트될 때만 실행')
        }

        // console.log('count:', count)
    })

    return (
        <div>
            <Viewer count={count} />
            <Counter handleSetCount={handleSetCount} />
        </div>
    )
}

export default CounterApp
