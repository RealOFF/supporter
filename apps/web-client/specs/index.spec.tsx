import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import React from 'react'

import Index from '../pages/index'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Index', () => {
  let mockedUseRouter
  beforeEach(() => {
    mockedUseRouter = useRouter as jest.Mock
    mockedUseRouter.mockImplementationOnce(() => ({
      push: jest.fn()
    }))
  })

  it('should render successfully', () => {
    const { baseElement } = render(<Index />)
    expect(baseElement).toBeTruthy()
  })
})
