using Microsoft.EntityFrameworkCore;
using ProdutosApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços de controlador
builder.Services.AddControllers();

// Configura o DbContext para usar a conexão com o banco de dados
builder.Services.AddDbContext<ProdutosContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Configuração de CORS, permitindo requisições apenas do frontend em desenvolvimento
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowFrontend",
            policy =>
            {
                policy.WithOrigins("http://localhost:3000") // Configura para aceitar requisições do frontend local
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
    });
}

// Configuração do Swagger, apenas em ambiente de desenvolvimento
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

// Usa a política de CORS, apenas em ambiente de desenvolvimento
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
