import { useRef, useEffect } from 'react'

const usePrevious = (value: any) : any => {
    const preserve = useRef()

    useEffect(() => {
        preserve.current = value
    })

    return preserve.current
}

export default usePrevious