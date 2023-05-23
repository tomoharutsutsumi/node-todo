import mongoose from 'mongoose';

declare interface ITodo {
    title: string;
    detail: string;
}

declare interface TodoModel extends mongoose.Model<ITodo> {}

declare const Todo: TodoModel;

export = Todo;

  