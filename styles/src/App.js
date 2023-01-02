import classes from './App.module.css';

function App(props) {
  return (
<section className={`${classes.header} ${props.dark && classes.darkTheme}`}>
    <h1 className={classes.sky}>Hello, Wordl!</h1>
    <p className={classes.featured}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dicta?
        Dicta fuga laborum tempore magnam ipsum dolorem maiores! Esse, natus.</p>
</section>
  );
}

export default App;
