-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2023 at 08:38 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `genshin`
--

-- --------------------------------------------------------

--
-- Table structure for table `Personaje`
--

CREATE TABLE `Personaje` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `elemento` varchar(20) NOT NULL,
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Privilegios`
--

CREATE TABLE `Privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Privilegios`
--

INSERT INTO `Privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'ver_personajes', '2023-03-14 22:28:58'),
(2, 'crear_personajes', '2023-03-14 22:28:58');

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `nombre`, `descripcion`, `created_at`) VALUES
(1, 'admin', NULL, '2023-03-14 22:28:34'),
(2, 'influencer', NULL, '2023-03-14 22:28:34');

-- --------------------------------------------------------

--
-- Table structure for table `Rol_privilegio`
--

CREATE TABLE `Rol_privilegio` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Rol_privilegio`
--

INSERT INTO `Rol_privilegio` (`idRol`, `idPrivilegio`, `created_at`) VALUES
(1, 1, '2023-03-14 22:29:27'),
(1, 2, '2023-03-14 22:29:27'),
(2, 1, '2023-03-14 22:29:35');

-- --------------------------------------------------------

--
-- Table structure for table `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(400) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `nombre`, `username`, `password`, `created_at`) VALUES
(4, 'sen', 'sen', '$2a$12$bSYy5x30PjDqO64MbyobAuV5bhW6otqMhuwUt0lj3w7mjIF6X4Fi2', '2023-03-27 18:31:58');

-- --------------------------------------------------------

--
-- Table structure for table `Usuario_rol`
--

CREATE TABLE `Usuario_rol` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usuario_rol`
--

INSERT INTO `Usuario_rol` (`idUsuario`, `idRol`, `created_at`) VALUES
(4, 1, '2023-03-27 18:34:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Personaje`
--
ALTER TABLE `Personaje`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Privilegios`
--
ALTER TABLE `Privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rol_privilegio`
--
ALTER TABLE `Rol_privilegio`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

--
-- Indexes for table `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `Usuario_rol`
--
ALTER TABLE `Usuario_rol`
  ADD PRIMARY KEY (`idUsuario`,`idRol`),
  ADD KEY `idRol` (`idRol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Personaje`
--
ALTER TABLE `Personaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Privilegios`
--
ALTER TABLE `Privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Rol_privilegio`
--
ALTER TABLE `Rol_privilegio`
  ADD CONSTRAINT `Rol_privilegio_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `Roles` (`id`),
  ADD CONSTRAINT `Rol_privilegio_ibfk_2` FOREIGN KEY (`idPrivilegio`) REFERENCES `Privilegios` (`id`);

--
-- Constraints for table `Usuario_rol`
--
ALTER TABLE `Usuario_rol`
  ADD CONSTRAINT `Usuario_rol_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `Usuarios` (`id`),
  ADD CONSTRAINT `Usuario_rol_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `Roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;