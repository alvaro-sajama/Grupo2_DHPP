-- Ejemplo de la base de datos

DROP DATABASE IF EXISTS RecruitingRH;
-- Crear la base de datos RecruitingRH
CREATE DATABASE RecruitingRH;

-- Usar la base de datos RecruitingRH
USE RecruitingRH;

-- Crear la tabla profesiones
CREATE TABLE Professions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Crear la tabla aspirantes
CREATE TABLE aspirantes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(20)	NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    linkedin_url VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    sexo ENUM('M', 'F', 'Otro'),
    imagen VARCHAR(255) DEFAULT 'userDefault.png',
    profesion_id INT,
    contraseña varchar(255) ,
    FOREIGN KEY (profesion_id) REFERENCES profesiones(id) -- Clave foránea
);

-- Crear la tabla empresas
CREATE TABLE empresas (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    linkedin_url VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) DEFAULT 'userDefault.png',
    profession_id INT,
    contraseña varchar(255),
    FOREIGN KEY (profesion_id) REFERENCES profesiones(id) -- Clave foránea
);

-- Insertar profesiones de prueba en la tabla profesiones
INSERT INTO Professions (nombre) VALUES
('Ingeniero de Software'),
('Analista de Datos'),
('Diseñador Gráfico'),
('Gerente de Proyectos'),
('Consultor de Negocios');

-- Insertar valores de prueba en la tabla aspirantes
INSERT INTO aspirantes (dni, nombre, apellido, email, telefono, linkedin_url, fecha_nacimiento, sexo, imagen, profession_id)
VALUES
('12345678A', 'Juan', 'Pérez', 'juan.perez@example.com', '+123456789', 'https://www.linkedin.com/in/juanperez', '1985-05-20', 'M', 'default.jpg', 1),
('87654321B', 'María', 'Gómez', 'maria.gomez@example.com', '+987654321', 'https://www.linkedin.com/in/mariagomez', '1990-10-15', 'F', 'default.jpg', 2),
('11223344C', 'Carlos', 'López', 'carlos.lopez@example.com', '+123123123', 'https://www.linkedin.com/in/carloslopez', '1980-12-01', 'M', 'default.jpg', 3),
('22334455D', 'Ana', 'Martínez', 'ana.martinez@example.com', '+456456456', 'https://www.linkedin.com/in/anamartinez', '1995-07-30', 'F', 'default.jpg', 4),
('33445566E', 'Luis', 'Ramírez', 'luis.ramirez@example.com', '+789789789', 'https://www.linkedin.com/in/luisramirez', '1987-03-25', 'M', 'default.jpg', 5);
