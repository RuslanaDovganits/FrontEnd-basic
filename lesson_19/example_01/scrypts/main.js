// async function getTodos() {
// }

const getTodos = async () => {
    try{
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await responce.json();
    console.log(data);
    } catch {
console.log('Произошла непредвидемая ошибка');
    } finally {
console.log('Этот код сработает в любом случае');
    }
}
getTodos()
console.log('Асинхронную функцию запустили и пошли дальше');







