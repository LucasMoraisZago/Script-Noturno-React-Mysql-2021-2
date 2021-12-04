CREATE DATABASE IF NOT EXISTS dados212n;

USE dados212n;

DROP TABLE IF EXISTS `moradorproprietario`;

CREATE TABLE `moradorproprietario` (
  `mor_codigo` int NOT NULL AUTO_INCREMENT,
  `mor_nome` varchar(30) DEFAULT NULL,
  `mor_apelido` varchar(10) DEFAULT NULL,
  `mor_celular` varchar(15) DEFAULT NULL,
  `mor_cpf` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`mor_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `apartamento`;

CREATE TABLE `apartamento` (
  `apt_codigo` int NOT NULL AUTO_INCREMENT,
  `apt_edificio` varchar(20) DEFAULT NULL,
  `apt_numero` int DEFAULT NULL,
  `apt_andar` int DEFAULT NULL,
  `apt_quartos` int DEFAULT NULL,
  `mor_codigo` int DEFAULT NULL,
  PRIMARY KEY (`apt_codigo`),
  KEY `fk_moradorproprietario_idx` (`mor_codigo`),
  CONSTRAINT `fk_moradorproprietario_idx` FOREIGN KEY (`mor_codigo`) REFERENCES `moradorproprietario` (`mor_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


INSERT INTO `moradorproprietario`(`mor_nome`, `mor_apelido`,`mor_celular`,`mor_cpf`)
VALUES ("Lucas De Morais Zago", "LMZ","(16) 99264-0197","726.449.510-89"),
		("Gabriel De Morais Zago", "Gabi","(16) 99200-1234","115.395.390-08"),
        ("Carlos Alfredo Junior", "Carlitos","(16) 9873-4455","849.421.440-35");

INSERT INTO `apartamento` (`apt_edificio`, `apt_numero`,`apt_andar`,`apt_quartos`,`mor_codigo`)
VALUES ("Portal da França", 80,20,5,1),
		("Portal da França", 50,12,1,2),
        ("Portal da França", 1,1,3,3);

