import React, { Component } from 'react'

export default class todoListUsingClass extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        }
        this.userRef = React.createRef();
    }

    createTodo(getTodo) {
        const list = [...this.state.list];
        const insertTodo = {
            value: getTodo,
            id: Math.random()
        }
        list.push(insertTodo);
        this.setState({ list: list, item: '' });

        this.userRef.current.focus();
    }

    readTodo(value) {
        this.setState({ item: value });
    }

    deleteTodo(id) {
        const list = [...this.state.list];
        const filterList = list.filter(x => x.id !== id)
        this.setState({ list : filterList });
    } 

    render() {
        return (
            <div>
                <input ref={this.userRef} type="text" name="nothing" />
                <input type="text" value={this.state.item} onChange={(e) => this.readTodo(e.target.value)} placeholder="enter todo ..." />
                <button onClick={() => this.createTodo(this.state.item)}>create todo</button>
                <div>
                    {
                        this.state.list.map((t, i) => {
                            
                            return <div>
                                 {t.value} <button onClick={() => this.deleteTodo(t.id)}>delete todo</button>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
