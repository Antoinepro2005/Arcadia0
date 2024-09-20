public function up()
{
Schema::create('veterinary_reports', function (Blueprint $table) {
$table->id();
$table->foreignId('animal_id')->constrained()->onDelete('cascade');
$table->date('date');
$table->text('report');
$table->timestamps();
});
}