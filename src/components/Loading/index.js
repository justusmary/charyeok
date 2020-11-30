import React from 'react'
import loading from 'res/Logo/logo.svg'

// eslint-disable-next-line
export default ({ pastDelay }) =>
  pastDelay ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100vh',
        width: '100vw'
      }}
    >
      <img
        style={{
          animation: '1.5s infinite heartbeat',
          width: '192px',
          height: '192px',
          borderRadius: '1em'
        }}
        src={loading}
        alt='Artey'
        title='Artey'
      />
    </div>
  ) : (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw'
      }}
    />
  )
