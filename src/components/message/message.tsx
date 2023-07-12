import React, { useState, useEffect } from 'react'
import { ContainerMessage } from './styles'

interface MessageProps {
  message: string
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const hideMessage = () => {
      setShowMessage(false)
    }

    const timeout = setTimeout(hideMessage, 15000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <ContainerMessage>
      {showMessage && (
        <div className="scroll-container">
          <div className="scroll">
            <div className="scroll-inner">
              <div className="paper">
                <div className="paper-inner">
                  <span className="message">{message}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContainerMessage>
  )
}

export default Message
