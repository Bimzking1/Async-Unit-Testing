import { fireEvent, render, screen } from '@testing-library/react'

import  TodoInput from '../TodoInput'

const mockSetTodoFnc = jest.fn()

test('todo input field typed', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli bakso'
        }
    })
    expect(inputElement.value).toBe('Membeli bakso')
})

test('todo input button click', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    const buttonElement = screen.getByTestId('todo-input-button')
    // ketik di field
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli bakso'
        }
    })
    // click button
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBeFalsy()
})