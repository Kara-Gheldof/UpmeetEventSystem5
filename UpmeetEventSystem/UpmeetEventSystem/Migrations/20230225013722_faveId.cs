using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UpmeetEventSystem.Migrations
{
    public partial class faveId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Favorites",
                newName: "FavoriteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FavoriteId",
                table: "Favorites",
                newName: "UserId");
        }
    }
}
