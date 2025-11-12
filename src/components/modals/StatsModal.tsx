// ...existing code...
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
// removed BaseModal import to implement a portal modal here
import { useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[][]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

const PortalModal = ({
  title,
  isOpen,
  handleClose,
  children,
}: {
  title?: string
  isOpen: boolean
  handleClose: () => void
  children?: React.ReactNode
}) => {
  if (typeof document === 'undefined') return null
  const container = document.body

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    const prevOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, handleClose])

  const modal = (
    <div
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
    >
      {/* Backdrop: use onClick (not onMouseDown) so the click won't fall through to underlying elements */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          // click happened on backdrop — close modal and stop propagation
          e.stopPropagation()
          handleClose()
        }}
        style={{ willChange: 'opacity' }}
      />

      {/* Panel: stop click propagation so clicks inside don't close modal */}
      <div
        className="relative inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-opacity transition-transform duration-200 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(8px) scale(.98)',
          pointerEvents: isOpen ? 'auto' : 'none',
          willChange: 'opacity, transform',
        }}
      >
        <div className="absolute top-3 right-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {title && <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>}

        <div>{children}</div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modal, container)
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  const { t } = useTranslation()
  if (gameStats.totalGames <= 0) {
    return (
      <PortalModal title={t('statistics')} isOpen={isOpen} handleClose={handleClose}>
        <StatBar gameStats={gameStats} />
      </PortalModal>
    )
  }
  return (
    <PortalModal title={t('statistics')} isOpen={isOpen} handleClose={handleClose}>
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">
        {t('guessDistribution')}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2">
          <div>
            <h5>{t('newWordIn')}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost)
              handleShare()
            }}
          >
            {t('share')}
          </button>
        </div>
      )}
    </PortalModal>
  )
}
// ...existing code...