
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    mail VARCHAR(50),
    roles JSONB,
    password VARCHAR(250),
    phone VARCHAR(15)
);
CREATE TABLE Awards (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id),
    objetive VARCHAR(50),
    ranking INT
);


CREATE TABLE Groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    id_user INT REFERENCES Users(id)
);
CREATE TABLE Entity (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id),
    date DATE
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body TEXT,
    created_at DATE,
    likes INT,
    is_submitted BOOLEAN,
    image BYTEA
) INHERITS (Entity);

CREATE TABLE Comments (
    id_post INT REFERENCES Posts(id),
    content TEXT,
    likes INT
) INHERITS (Entity);

CREATE TABLE Reactions (
    id_post INT REFERENCES Posts(id),
    type VARCHAR(50)
) INHERITS (Entity);

CREATE TABLE Notifications (
    content TEXT,
    readed BOOLEAN
) INHERITS (Entity);

CREATE TABLE GroupMessages (
    id_group INT REFERENCES Groups(id),
    body TEXT
) INHERITS (Entity);

CREATE TABLE Events (
    id SERIAL PRIMARY KEY,
    name_evento VARCHAR(50),
    fecha_inicio DATE,
    place VARCHAR(50),
    descripcion TEXT,
    fecha_final DATE,
    imagen BYTEA,
    likes INT
);

CREATE TABLE Activities (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id),
    nombre_actividad VARCHAR(50),
    fecha_actividad DATE,
    descripcion TEXT
);

CREATE TABLE Message (
    id_message SERIAL PRIMARY KEY,
    id_receiver INT REFERENCES Users(id),
    id_emitter INT REFERENCES Users(id),
    date_message DATE
);

CREATE TABLE Follow (
    id SERIAL PRIMARY KEY,
    id_follower INT REFERENCES Users(id),
    id_following INT REFERENCES Users(id)
);


CREATE TABLE GroupMember (
    id_user INT REFERENCES Users(id),
    id_group INT REFERENCES Groups(id),
    role VARCHAR(50),
    PRIMARY KEY (id_user, id_group)
);

CREATE TABLE Rankings (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id),
    position INT,
    id_awards INT REFERENCES Awards(id)
);

