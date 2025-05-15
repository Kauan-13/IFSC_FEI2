const Form = () => {
    return (
        <form>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome"/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email"/>
            <label htmlFor="senha">Senha: </label>
            <input type="password" id="senha"/>
        </form>
    );
};

export default Form;
