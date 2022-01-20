### Coding Guidelines (Linting and Formatting)
Linting will be enforced by [`pylint`](https://pylint.pycqa.org/en/latest/user_guide/run.html) which 
adheres to [PEP8](https://pep8.org/) by default. This means that variable and module names must be in
 `snake_case`, class names must be in `PascalCase`, etc. *everything is in pep8*.

This will be a new development dependency and must be installed.
```sh
py -m pip install pylint  # on windows
```
Configurations for it will be in [pylintrc](./.pylintrc) so that 
running `pylint` will be easier and your IDE and can just load it.

Running the linter
```sh
#backend must be the root folder
py -m pylint ..\backend
```

We are going to adhere to [Google's style of documentation strings](https://gist.github.com/redlotus/3bc387c2591e3e908c9b63b97b11d24e) 
as it is more modern than reStructuredText and is supported better for FastAPI's autodocumentation.

It is also recommended to add [type hints](https://www.python.org/dev/peps/pep-0484/) to everything as much as possible
except for FastAPI routes, `response_model` keyword argument must be used instead at the route decorator.