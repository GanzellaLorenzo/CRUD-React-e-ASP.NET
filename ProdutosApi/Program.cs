using Microsoft.EntityFrameworkCore;
using ProdutosApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona servi�os de controlador
builder.Services.AddControllers();

// Configura o DbContext para usar a conex�o com o banco de dados
builder.Services.AddDbContext<ProdutosContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Configura��o de CORS, permitindo requisi��es apenas do frontend em desenvolvimento
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowFrontend",
            policy =>
            {
                policy.WithOrigins("http://localhost:3000") // Configura para aceitar requisi��es do frontend local
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
    });
}

// Configura��o do Swagger, apenas em ambiente de desenvolvimento
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}

var app = builder.Build();

// Usa o Swagger apenas em ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Usa a pol�tica de CORS, apenas em ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowFrontend");
}

// Autoriza o uso de recursos da API
app.UseAuthorization();

// Mapear os controladores
app.MapControllers();

// Rodar o aplicativo
app.Run();
