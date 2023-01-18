import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../modal/Modal';
import SingleTodo from '../SingleTodo/SingleTodo';
import "../style.css";

interface Props {
	todos: Array<Todo>;
	setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	CompletedTodos: Todo[];
}

const TodoList: React.FC<Props> = ({
	todos,
	setTodos,
	CompletedTodos,
	setCompletedTodos,
}: Props) => {
  return (
		<div className="container">
			<Droppable droppableId="TodosList">
				{(provided, snapshot) => (
					<div
						className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
						ref={provided.innerRef}
						{...provided.droppableProps}>
						<span className="todos__heading">Active Tasks</span>
						{todos?.map((todo, index) => (
							<SingleTodo
								index={index}
								todos={todos}
								todo={todo}
								key={todo.id}
								setTodos={setTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="TodosRemove">
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className={`todos  ${
							snapshot.isDraggingOver ? "dragcomplete" : "remove"
						}`}>
						<span className="todos__heading">Completed Tasks</span>
						{CompletedTodos?.map((todo, index) => (
							<SingleTodo
								index={index}
								todos={CompletedTodos}
								todo={todo}
								key={todo.id}
								setTodos={setCompletedTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;