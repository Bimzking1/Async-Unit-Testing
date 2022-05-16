import { render, screen } from '@testing-library/react'

// import component
import TodoFooter from '../TodoFooter'

// [v] 1. Tes container dirender atau tidak
// 2. Check props.todoLength > 0
  // [v] - todo-footer-with-items dirender
  // [v] - todo-footer-no-item tidak dirender
// 3. Test kalau props.todoLength > 1
  // - [v] todo-footer-with-items berisi text 'You have {count} tasks'
// 4. Test kalau props.todoLength == 1
  // - [v] todo-footer-with-items berisi text 'You have 1 task'
// 5. Test kalau props.todoLength <= 0
  // - todo-footer-with-items TIDAK di render
  // - todo-footer-no-item di render

test( 'renders todo footer container', () => {
    // 1. RENDER COMPONENT
    render(<TodoFooter todoLength={5}/>)
    // 2. SELECT DOM
    const containerElement = screen.getByTestId('todo-footer-container')
    // 3. EXPECTED RESULT
    expect(containerElement).toBeInTheDocument()
})

describe('todo length > 0', () => {
    test('todo length > 0, render with items message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).toBeInTheDocument()
    })
    
    test('todo length > 0, not render with no items message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithNoItemElement = screen.queryByTestId('todo-footer-no-item')
        expect(footerWithNoItemElement).not.toBeInTheDocument()
    })

    describe('todo length == 1', () => {
        test('render "TASK" in singluar', () => {
            render(<TodoFooter todoLength={1} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 1 task')
        })
    })

    describe('todo length > 1', () => {
        test('render "TASK" in plural', () => {
            render(<TodoFooter todoLength={5} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 5 tasks')
        })
    })

    describe('todo length <= 0', () => {
        test('not render with items message', () => {
            render(<TodoFooter todoLength={0} />)
            const footerWithNoItemElement = screen.queryByTestId('todo-footer-with-items')
            expect(footerWithNoItemElement).not.toBeInTheDocument()
        })
        
        test('not render with no items message', () => {
            render(<TodoFooter todoLength={0} />)
            const footerWithNoItemElement = screen.getByTestId('todo-footer-no-item')
            expect(footerWithNoItemElement).toBeInTheDocument()
        })
    })
})