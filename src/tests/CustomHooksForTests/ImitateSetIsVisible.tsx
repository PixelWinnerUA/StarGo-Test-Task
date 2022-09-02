import {useState, useCallback} from 'react'

const ImitateSetIsVisible = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const setFakeVisible = useCallback(() => setIsVisible(true), [])
    return {isVisible, setFakeVisible}
}

export default ImitateSetIsVisible;