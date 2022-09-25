import "./styles.css";
import Header from "./Profile";

export default function App() {
  return (
    <div className="App">
      <div className="Cabeçalho">
        <Header />
        <h1>Rafael Silva Santos</h1>
        <p>
          <strong>Telefone:</strong> (61) 99271-3508
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:r4fael.silva.sant0s@gmail.com?subject=assunto">
            r4fael.silva.sant0s@gmail.com
          </a>
        </p>
        <p>
          <strong>Git-Hub:</strong>{" "}
          <a href="https://github.com/rssantoss">github.com/rssantoss</a>
        </p>
      </div>

      <div className="objetivos">
        <h2>Objetivo</h2>
        <p>
          Ao longo de minha trajetória, adquiri experiências com cursos e
          estágios para, agora, conseguir uma chance de efetivação na área de
          Desenvolvimento. Acredito que posso compensar a falta de experiência
          com muita dedicação e empenho.
        </p>
      </div>

      <div className="info_academia">
        <h2>Informações Acadêmicas</h2>
        <ul type="none">
          <li>
            <strong>Curso:</strong> Ciência da Computação
          </li>
          <li>
            <strong>Semestre:</strong> 6º
          </li>
          <li>
            <strong>Periodo:</strong> Noturno
          </li>
          <li>
            <strong>Local:</strong> Brasília - Asa Norte
          </li>
        </ul>
      </div>

      <div className="experiencia">
        <h2>Experiências</h2>
        <ul>
          <li>
            Estágiário - Tribunal de Justiça do Distrito Federal e Territórios
          </li>
          <li>Estagiário - BB Tecnologia e Serviços</li>
        </ul>
      </div>

      <div className="conhecimentos">
        <h2>Conhecimentos</h2>
        <ul>
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MysQL</li>
          <li>PostgreSQL</li>
          <li>CSS</li>
          <li>Inglês Intermediário</li>
          <li>Power BI</li>
        </ul>
      </div>
    </div>
  );
}
