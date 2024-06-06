# Sebastián Padilla Pardo

## Proyecto Final: _Wiki_ basada en _Path of Champions_
- [Despliegue en _GitHub Pages_](https://sebastianp29.github.io/proyecto-final/)

  <aside>
    <h2>Categorías</h2>
    <h3>Campeones</h3>
    <ul>
      {% for article in collections.campeon %}
        <li>
          <a href="{{article.url}}">
            {{ article.data.title }}
          </a>
        </li>
      {% endfor %}
    </ul>
    <h3>Juego</h3>
    <ul>
      {% for article in collections.juego %}
        <li>
          <a href="{{article.url}}">
            {{ article.data.title }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </aside>