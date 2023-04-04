export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$');

export const validPassword = new RegExp(
  '^(?=.*[A-Z])(?=.*?[A-Za-z])(?=.*?[0-9]).{6,15}$'
);
